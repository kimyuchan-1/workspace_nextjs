'use client';

import { useEffect, useState } from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { supabase } from "@/supabase/client";
import type { Session, User } from "@supabase/supabase-js";
import { useSetAtom } from "jotai";
import { isLoginAtom } from "@/isLogin";

export default function Home() {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const setIsLogin = useSetAtom(isLoginAtom);

  // 루트 페이지에서도 세션 동기화
  useEffect(() => {
    // 첫 로딩 시 현재 세션 확인
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    // 로그인/로그아웃 상태 변경 리스너
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // 세션 변경될 때마다 전역 isLogin 업데이트
  useEffect(() => {
    setIsLogin(!!session);
  }, [session, setIsLogin]);

  // 로그인 안 된 상태
  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="flex items-center justify-center mb-8">
          <TbBrandNextjs className="text-7xl text-black mx-4" />
          <BiLogoTypescript className="text-7xl text-blue-800 mx-4" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Welcome to My Next.js App</h1>
        <p className="text-lg text-gray-600 mb-4">
          로그인을 하면 더 많은 기능을 사용할 수 있습니다.
        </p>
        <a
          href="/login"
          className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 hover:cursor-pointer"
        >
          로그인 페이지로 이동
        </a>
      </div>
    );
  }

  // 로그인 된 상태
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="flex items-center justify-center mb-8">
        <TbBrandNextjs className="text-8xl text-gray-800 mx-4" />
        <BiLogoTypescript className="text-8xl text-blue-800 mx-4" />
      </div>
      <h1 className="text-3xl font-bold mb-8">
        Welcome to KGT Next.js App
      </h1>
      <p className="text-md text-gray-700 mb-2">
        사용자: {user?.user_metadata?.user_name || user?.email}
      </p>
      <p className="text-sm text-gray-500">
        이메일: {user?.email}
      </p>
    </div>
  );
}