import { EyeIcon, LockIcon, MailIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const avatarData = [{ id: 1 }, { id: 2 }, { id: 3 }];

export const LogIn = (): JSX.Element => {
  return (
    <div className="flex flex-col min-h-[720px] items-start relative bg-[linear-gradient(151deg,rgba(40,167,69,1)_0%,rgba(192,235,123,1)_100%)]">
      <div className="flex min-h-[720px] items-center justify-center pt-[97.5px] pb-[37.5px] px-5 relative self-stretch w-full flex-[0_0_auto]">
        <img
          className="absolute w-full h-full top-0 left-0"
          alt="Image"
          src="/figmaAssets/image.svg"
        />

        <div className="flex max-w-[1200px] w-[1200px] items-center justify-center gap-[60px] relative">
          <div className="flex flex-col items-end gap-[23.1px] p-10 relative flex-1 grow">
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <h1 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Teko',Helvetica] font-bold text-white text-[56px] tracking-[0] leading-[67.2px]">
                Welcome to
                <br />
                Helping Hand
              </h1>
            </div>

            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] opacity-90">
              <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Teko',Helvetica] font-light text-white text-[20.8px] tracking-[0] leading-[33.3px]">
                Connect with trusted professionals for all your household needs.
                From cleaning to
                <br />
                repairs, we&#39;ve got you covered.
              </p>
            </div>

            <div className="flex w-[506px] items-center gap-4 pt-[8.9px] pb-0 px-0 relative flex-[0_0_auto] ml-[-16.00px]">
              <div className="inline-flex flex-[0_0_auto] flex-col items-start relative">
                <div className="inline-flex items-start relative flex-[0_0_auto]">
                  {avatarData.map((avatar, index) => (
                    <div
                      key={avatar.id}
                      className={`flex w-12 h-12 flex-col items-start relative ${index > 0 ? "-ml-2" : ""}`}
                    >
                      <div className="flex w-12 h-12 items-center justify-center p-0.5 relative bg-[#ffffff33] rounded-3xl border-2 border-solid border-white">
                        <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                          <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-5 whitespace-nowrap">
                            👤
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Teko',Helvetica] font-semibold text-white text-[17.6px] tracking-[0] leading-[normal]">
                    500+ Trusted Helpers
                  </div>
                </div>

                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] mt-[-5.68e-14px] opacity-75">
                  <div className="relative [display:-webkit-box] items-center justify-center w-fit mt-[-1.00px] [font-family:'Teko',Helvetica] font-light text-white text-[14.4px] tracking-[0] leading-[23px] whitespace-nowrap overflow-hidden text-ellipsis [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                    Ready to assist you
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Card className="flex flex-col items-start p-12 relative flex-1 grow bg-white rounded-3xl shadow-[0px_25px_50px_#00000026] border-0">
            <CardContent className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto] p-0">
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                  <h2 className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Teko',Helvetica] font-bold text-[#1a2428] text-[35.2px] text-center tracking-[0] leading-[normal]">
                    Welcome Back!
                  </h2>
                </div>

                <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Teko',Helvetica] font-normal text-gray-500 text-base text-center tracking-[0] leading-[normal]">
                    Log in to access your account
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <Label className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    <span className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Teko',Helvetica] font-medium text-[#1a2428] text-[14.4px] tracking-[0] leading-[normal]">
                      Email Address
                    </span>
                  </Label>

                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-center justify-center pl-[50px] pr-[18px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-xl overflow-hidden border-2 border-solid border-gray-200">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 border-0 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 [font-family:'Teko',Helvetica] font-normal text-[#757575] text-base"
                      />
                    </div>

                    <MailIcon className="absolute w-[18px] h-[18px] top-[35%] left-4 text-gray-400" />
                  </div>
                </div>

                <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                  <Label className="flex self-stretch w-full flex-col items-start relative flex-[0_0_auto]">
                    <span className="relative flex items-center justify-center self-stretch mt-[-1.00px] [font-family:'Teko',Helvetica] font-medium text-[#1a2428] text-[14.4px] tracking-[0] leading-[normal]">
                      Password
                    </span>
                  </Label>

                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex items-center justify-center pl-[50px] pr-[18px] py-[18px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-xl overflow-hidden border-2 border-solid border-gray-200">
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        className="flex-1 border-0 p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0 [font-family:'Teko',Helvetica] font-normal text-[#757575] text-base"
                      />
                    </div>

                    <LockIcon className="absolute w-[18px] h-[18px] top-[35%] left-4 text-gray-400" />

                    <EyeIcon className="absolute w-[18px] h-[18px] top-[35%] right-4 text-gray-400 cursor-pointer" />
                  </div>
                </div>

                <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <Checkbox
                      id="remember"
                      className="w-4 h-4 rounded-[2.5px]"
                    />

                    <Label
                      htmlFor="remember"
                      className="inline-flex flex-col items-start relative flex-[0_0_auto] cursor-pointer"
                    >
                      <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Teko',Helvetica] font-normal text-gray-500 text-[14.4px] tracking-[0] leading-[normal]">
                        Remember me
                      </span>
                    </Label>
                  </div>

                  <button className="inline-flex flex-col items-start relative flex-[0_0_auto] bg-transparent border-0 cursor-pointer">
                    <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Teko',Helvetica] font-medium text-[#28a745] text-[14.4px] tracking-[0] leading-[normal]">
                      Forgot password?
                    </span>
                  </button>
                </div>

                <Button className="flex items-center justify-center p-4 relative self-stretch w-full flex-[0_0_auto] bg-[#28a745] rounded-xl hover:bg-[#218838] h-auto">
                  <span className="relative flex items-center justify-center flex-1 mt-[-1.00px] [font-family:'Teko',Helvetica] font-semibold text-white text-[19.2px] text-center tracking-[0] leading-[normal]">
                    Log In
                  </span>
                </Button>

                <div className="flex items-start justify-center gap-[1.42e-14px] relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Teko',Helvetica] font-normal text-gray-500 text-base text-center tracking-[0] leading-[normal]">
                    Don&#39;t have an account?
                  </p>

                  <button className="inline-flex items-start justify-center relative flex-[0_0_auto] bg-transparent border-0 cursor-pointer">
                    <span className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Teko',Helvetica] font-medium text-[#28a745] text-base text-center tracking-[0] leading-[normal]">
                      Sign up here
                    </span>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <header className="flex w-[1280px] items-center px-[100px] py-5 fixed top-0 left-0 bg-white z-50">
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <img
            className="relative w-[45px] h-[66px] object-cover"
            alt="Hh logo"
            src="/figmaAssets/hh-logo-1.png"
          />

          <span className="relative flex items-center justify-center w-fit [font-family:'Teko',Helvetica] font-semibold text-[#1a2428] text-[17.6px] tracking-[0] leading-[normal]">
            Helping Hand
          </span>
        </div>
      </header>
    </div>
  );
};
