'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectPage() {
    const router = useRouter();
    useEffect(() => {
        router.replace('/#projects');
    }, [router]);
    return <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }} />;
}
