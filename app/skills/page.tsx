'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectPage() {
    const router = useRouter();
    useEffect(() => {
        router.replace('/#experience');
    }, [router]);
    return <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }} />;
}
