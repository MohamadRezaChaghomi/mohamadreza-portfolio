'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere, Float } from '@react-three/drei';

// کامپوننت ذرات با قابلیت تغییر رنگ بر اساس تم
function DynamicParticles({ themeColor }) {
  const ref = useRef();
  const count = 3000;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // توزیع در یک کره با شعاع 4
      const radius = 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i*3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i*3+1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i*3+2] = radius * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.03;
      ref.current.rotation.x += delta * 0.01;
    }
  });

  // رنگ ذرات بر اساس تم: در دارک مود آبی-بنفش، در لایت مود طوسی-آبی
  const particleColor = themeColor === 'dark' ? '#6c91b6' : '#4a6a8a';

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={particleColor}
        size={0.025}
        sizeAttenuation={true}
        opacity={themeColor === 'dark' ? 0.7 : 0.5}
        blending={2}
      />
    </Points>
  );
}

// کره‌های شناور با تغییر رنگ
function FloatingSpheres({ themeColor }) {
  const sphereColor1 = themeColor === 'dark' ? '#88a9c3' : '#5a7a9a';
  const sphereColor2 = themeColor === 'dark' ? '#4f7a9e' : '#3a5a7a';
  const sphereColor3 = themeColor === 'dark' ? '#b0c4de' : '#708090';

  return (
    <>
      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh position={[-1.5, -0.5, -1.2]}>
          <sphereGeometry args={[0.28, 48, 48]} />
          <meshStandardMaterial color={sphereColor1} roughness={0.3} metalness={0.2} emissive={themeColor === 'dark' ? '#224455' : '#112233'} emissiveIntensity={0.2} />
        </mesh>
      </Float>
      <Float speed={0.8} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[1.4, 0.8, -1.5]}>
          <sphereGeometry args={[0.38, 64, 64]} />
          <meshStandardMaterial color={sphereColor2} roughness={0.4} metalness={0.1} emissive={themeColor === 'dark' ? '#1a3344' : '#0a2233'} emissiveIntensity={0.15} />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.9}>
        <mesh position={[0, 1.4, -2]}>
          <sphereGeometry args={[0.22, 32, 32]} />
          <meshStandardMaterial color={sphereColor3} roughness={0.5} metalness={0.05} />
        </mesh>
      </Float>
    </>
  );
}

export default function Background3D() {
  const [theme, setTheme] = useState('dark'); // پیش‌فرض دارک

  useEffect(() => {
    // تشخیص تم از روی کلاس یا data-theme روی body/html
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark') ||
                     document.body.classList.contains('dark') ||
                     document.documentElement.getAttribute('data-theme') === 'dark' ||
                     (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
      setTheme(isDark ? 'dark' : 'light');
    };
    checkTheme();
    //监听 تغییرات تم (مثلاً با MutationObserver یا event)
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-theme'] });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class', 'data-theme'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 50 }}
        style={{ background: 'transparent', display: 'block' }}
        resize={{ scroll: false, offsetSize: true }}
      >
        <ambientLight intensity={theme === 'dark' ? 0.4 : 0.6} />
        <pointLight position={[3, 3, 3]} intensity={0.7} color={theme === 'dark' ? '#aaccff' : '#ffccaa'} />
        <pointLight position={[-2, 1, 2]} intensity={0.5} color={theme === 'dark' ? '#ffaa88' : '#88aaff'} />
        
        <FloatingSpheres themeColor={theme} />
        <DynamicParticles themeColor={theme} />
      </Canvas>
    </div>
  );
}