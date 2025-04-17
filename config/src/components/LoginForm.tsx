"use client"

import { useState } from 'react'
import { loginWithEmailPassword, signUpWithEmailPassword, LoginCredentials } from '@/lib/auth'
import Image from 'next/image'
import { Logo } from './Logo'

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    const credentials: LoginCredentials = { email, password }
    
    try {
      const { error } = isLogin 
        ? await loginWithEmailPassword(credentials)
        : await signUpWithEmailPassword(credentials)
      
      if (error) {
        setError(typeof error === 'string' ? error : '로그인 중 오류가 발생했습니다')
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-[#fff3ba] flex flex-row justify-center w-full">
      <div className="bg-[#fff3ba] overflow-hidden w-[402px] h-[874px] relative">
        <div className="absolute w-[232px] h-[104px] top-[88px] left-[81px]">
          <Logo />
        </div>
        
        <div className="absolute w-[427px] h-[622px] top-[210px] left-[-30px]">
          <div className="absolute w-[427px] h-[622px] top-0 left-0">
            <div className="relative w-[417px] h-[632px] -top-1">
              <div className="absolute w-[370px] h-[632px] top-0 left-[47px] bg-white rounded-lg shadow-lg" />

              <div className="absolute w-[308px] h-[45px] top-[223px] left-[81px]">
                <div className="relative w-[306px] h-[45px]">
                  <div className="h-10 top-[5px] left-0 bg-[#ffed8f] absolute w-[306px] rounded-[20px]" />
                  <div className="w-[260px] top-0 left-4 text-[#353535] text-[15px] absolute font-normal text-center tracking-[0] leading-[50px] whitespace-nowrap">
                    로그인
                  </div>
                </div>
              </div>

              <div className="w-[58px] top-[19px] left-20 text-[#000000b8] text-[15px] absolute font-normal text-center tracking-[0] leading-[50px] whitespace-nowrap">
                아이디
              </div>

              <div className="w-[81px] top-[104px] left-[73px] text-[#000000b8] text-[15px] absolute font-normal text-center tracking-[0] leading-[50px] whitespace-nowrap">
                비밀번호
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="absolute w-[312px] h-[41px] top-[59px] left-[76px]">
                  <div className="relative w-[310px] h-[41px]">
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="아이디를 입력하세요"
                      className="h-[34px] top-[7px] left-1 bg-white border border-solid border-[#d9d9d9] absolute w-[306px] rounded-[20px] px-4 text-[15px]"
                      required
                    />
                  </div>
                </div>

                <div className="absolute w-[312px] h-[41px] top-[152px] left-[76px]">
                  <div className="relative w-[310px] h-[41px]">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="비밀번호를 입력하세요"
                      className="h-[34px] top-[7px] left-1 bg-white border border-solid border-[#d9d9d9] absolute w-[306px] rounded-[20px] px-4 text-[15px]"
                      required
                    />
                  </div>
                </div>

                <div className="absolute w-[107px] top-[287px] left-[100px]">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="form-checkbox h-4 w-4 text-[#ffd500]"
                    />
                    <span className="text-black text-[13px]">로그인 유지</span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="absolute w-[306px] h-[45px] top-[223px] left-[81px] bg-[#ffed8f] rounded-[20px] text-[#353535] text-[15px] font-normal"
                >
                  {loading ? '처리 중...' : '로그인'}
                </button>
              </form>

              <div className="absolute w-[306px] top-[366px] left-[81px] flex justify-between items-center">
                <button className="text-black text-[15px] ml-4">ID 찾기</button>
                <span className="text-gray-400">|</span>
                <button className="text-black text-[15px]">PW 찾기</button>
                <span className="text-gray-400">|</span>
                <button 
                  onClick={() => setIsLogin(false)}
                  className="text-[#ffd500] text-[15px] mr-8"
                >
                  회원가입
                </button>
              </div>

              <div className="absolute w-[95px] top-[441px] left-[185px] text-[#656565] text-xs text-center">
                간편 로그인
              </div>

              <div className="absolute w-[101px] h-px top-[465px] left-[84px] bg-gray-300" />
              <div className="absolute w-[101px] h-px top-[465px] left-[280px] bg-gray-300" />

              <div className="absolute flex justify-between w-[240px] top-[519px] left-[114px]">
                <button className="w-[51px] h-[51px] bg-white rounded-full shadow-md flex items-center justify-center">
                  <Image
                    src="/images/google.png"
                    alt="Google"
                    width={39}
                    height={37}
                  />
                </button>
                <button className="w-[51px] h-[51px] bg-[#03C75A] rounded-full shadow-md flex items-center justify-center">
                  <Image
                    src="/images/naver.png"
                    alt="Naver"
                    width={39}
                    height={37}
                  />
                </button>
                <button className="w-[51px] h-[51px] bg-[#FEE500] rounded-full shadow-md flex items-center justify-center">
                  <Image
                    src="/images/kakao.png"
                    alt="Kakao"
                    width={39}
                    height={37}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 