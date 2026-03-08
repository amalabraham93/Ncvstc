"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import api from '@/lib/api';
import { useAuthStore } from '@/lib/store';

const registerSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    role: z.enum(['Student', 'Institution']),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    name: z.string().optional(),
    registrationNumber: z.string().optional()
}).refine(data => {
    if (data.role === 'Student') return !!data.firstName && !!data.lastName;
    if (data.role === 'Institution') return !!data.name && !!data.registrationNumber;
    return true;
}, {
    message: "Please fill in all required fields for your role",
    path: ["role"]
});

type RegisterForm = z.infer<typeof registerSchema>;

export default function RegisterPage() {
    const router = useRouter();
    const { login } = useAuthStore();
    const [error, setError] = useState('');
    const [role, setRole] = useState<'Student' | 'Institution'>('Student');

    const { register, handleSubmit, formState: { errors, isSubmitting }, setValue } = useForm<RegisterForm>({
        resolver: zodResolver(registerSchema),
        defaultValues: { role: 'Student' }
    });

    const onSubmit = async (data: RegisterForm) => {
        try {
            setError('');
            const res = await api.post('/auth/register', data);

            login({
                _id: res.data._id,
                email: res.data.email,
                role: res.data.role
            }, res.data.token);

            switch (res.data.role) {
                case 'Student': router.push('/student/dashboard'); break;
                case 'Institution': router.push('/institution/dashboard'); break;
                default: router.push('/');
            }
        } catch (err: any) {
            setError(err.response?.data?.message || 'Failed to register');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Create a new account
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        {error && <div className="p-3 bg-red-50 text-red-600 text-sm rounded-md">{error}</div>}

                        <div>
                            <label className="block text-sm font-medium text-gray-700">I am a</label>
                            <div className="mt-2 flex space-x-4">
                                <button
                                    type="button"
                                    onClick={() => { setRole('Student'); setValue('role', 'Student'); }}
                                    className={`flex-1 py-2 px-4 border rounded-md text-sm font-medium ${role === 'Student' ? 'border-blue-500 text-blue-600 bg-blue-50' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'}`}
                                >
                                    Student
                                </button>
                                <button
                                    type="button"
                                    onClick={() => { setRole('Institution'); setValue('role', 'Institution'); }}
                                    className={`flex-1 py-2 px-4 border rounded-md text-sm font-medium ${role === 'Institution' ? 'border-blue-500 text-blue-600 bg-blue-50' : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'}`}
                                >
                                    Institution
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email address</label>
                            <input type="email" {...register('email')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" {...register('password')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                            {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>}
                        </div>

                        {role === 'Student' ? (
                            <div className="flex space-x-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                                    <input type="text" {...register('firstName')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                </div>
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                    <input type="text" {...register('lastName')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Institution Name</label>
                                    <input type="text" {...register('name')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Registration Number</label>
                                    <input type="text" {...register('registrationNumber')} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                </div>
                            </>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                        >
                            {isSubmitting ? 'Registering...' : 'Register'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
