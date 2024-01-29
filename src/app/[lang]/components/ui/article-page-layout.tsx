/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

"use client";

import type React from "react";

import Image from "next/image";
import Link from "next/link";
import {useUrl} from "nextjs-current-url";

import {Heading1} from "@/utils/typography";

import {RenderIcon} from "../../utils/render-icon";
import {Button} from "./button";
import {Popover, PopoverContent, PopoverTrigger} from "./popover";
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterShareButton, WhatsappIcon, WhatsappShareButton, XIcon } from "react-share";

export default function ArticlePageLayout({
  children,
  heading,
  imageCoverUrl,
  publishedAt,
  authorName,
  authorImgUrl,
}: {
  children: React.ReactNode;
  imageCoverUrl: any;
  heading: string;
  publishedAt: string;
  authorName: string;
  authorImgUrl: any;
}) {
  const {href: currentUrl} = useUrl() ?? {};

  return (
    <div className="flex w-full flex-col items-center justify-center mt-20">
      {/* Cover Image Container */}
      <div className="w-full px-2 container-x:max-w-[1536px] mx-auto">
        <div className="relative aspect-w-16 aspect-h-13 container-sm:aspect-h-9 container-lg:aspect-h-8 container-x:aspect-h-5 rounded-3xl container-md:rounded-[40px] overflow-hidden z-0">
          <Image
            alt="coverImage"
            src={imageCoverUrl}
            className="object-cover w-full  h-full rounded-3xl container-md:rounded-[40px]"
            width={1280}
            height={720}
            sizes="(max-width: 1280px) 100vw, 1536px"
            priority
          />
          <div className="absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col items-center justify-center">
            <div className="max-w-[768px]">
              <div>
                <div className="space-y-5">
                  <div className="flex flex-wrap space-x-2">
                    <Link
                      className="transition-colors hover:text-white duration-300  inline-flex py-1 rounded-full font-medium text-xs !px-3 text-red-800 bg-red-100 hover:bg-red-800"
                      href="/articles"
                    >
                      Articles Home
                    </Link>
                  </div>
                  <Heading1 className="text-light font-semibold !text-3xl container-md:!text-4xl container-md:!leading-[120%] container-lg:!text-5xl max-w-4xl ">
                    {heading}
                  </Heading1>
                  <div className="w-full border-b border-neutral-200 " />
                  <div className="flex flex-col container-sm:flex-row justify-between container-sm:items-end space-y-5 container-sm:space-y-0 container-sm:space-x-5 rtl:space-x-reverse">
                    <div className="flex items-center flex-wrap text-neutral-200 text-left  text-sm leading-none flex-shrink-0">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <div className="relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold rounded-full shadow-inner h-10 w-10 container-sm:h-11 container-sm:w-11 text-xl ring-1 ring-white ">
                          <img
                            alt={authorName}
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            className="absolute inset-0 w-full h-full object-cover"
                            sizes="100px"
                            src={authorImgUrl}
                          />
                        </div>
                      </div>
                      <div className="ms-3">
                        <div className="flex items-center">
                          <span className="block font-semibold">
                            {authorName}
                          </span>
                        </div>
                        <div className="text-xs mt-[6px]">
                          {/* <span className="text-neutral-300">
                            {formatDate(publishedAt)}
                          </span>
                          <span className="mx-2 font-semibold">·</span> */}
                          <span className="text-neutral-300">2 min read</span>
                        </div>
                      </div>
                    </div>

                    {/* Share */}
                    <div>
                      <div className="flex flex-row space-x-2.5 rtl:space-x-reverse items-center">
                        <div className="relative inline-block text-left">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                className=" flex items-center justify-center focus:outline-none  bg-neutral-100 hover:bg-neutral-200   text-neutral-700  rounded-full"
                                title="More"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                data-headlessui-state=""
                              >
                                <RenderIcon className="w-5 h-5" text="SHARE" />
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="absolute origin-top-right end-0 w-56 mt-2 bg-white dark:bg-neutral-900 rounded-2xl divide-y divide-neutral-100 shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 focus:outline-none z-30 transform opacity-100 scale-100">
                              {/* <div
                                className="absolute origin-top-right end-0 w-56 mt-2 bg-white dark:bg-neutral-900 rounded-2xl divide-y divide-neutral-100 shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 focus:outline-none z-30 transform opacity-100 scale-100"
                                aria-labelledby="headlessui-menu-button-:r27:"
                                id="headlessui-menu-items-:r33:"
                                role="menu"
                                data-headlessui-state="open"
                                aria-activedescendant="headlessui-menu-item-:r34:"
                              > */}

                              {currentUrl && (
                                <div
                                  className="px-1 py-3 text-sm text-neutral-6000 dark:text-neutral-300"
                                  role="none"
                                >
                                  <div
                                    className="flex items-center rounded-xl w-full px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 truncate "
                                  >
                                    <FacebookShareButton className="w-full" url={currentUrl} >
                                      <div className="flex flex-row items-center">
                                      <FacebookIcon size={30} round />
                                      <span className="ms-3">Facebook</span>
                                      </div>
                                      
                                    
                                    </FacebookShareButton>
                                  </div>

                                  <div
                                    className="flex items-center rounded-xl w-full px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 truncate "
                                  >
                                    <TwitterShareButton className="w-full" url={currentUrl} >
                                      <div className="flex flex-row items-center">
                                      <XIcon size={30} round />
                                      <span className="ms-3">Twitter</span>
                                      </div>
                                      
                                    
                                    </TwitterShareButton>
                                  </div>


                                  <div
                                    className="flex items-center rounded-xl w-full px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 truncate "
                                  >
                                    <WhatsappShareButton className="w-full" url={currentUrl} >
                                      <div className="flex flex-row items-center">
                                      <WhatsappIcon size={30} round />
                                      <span className="ms-3">Whatsapp</span>
                                      </div>
                                      
                                    
                                    </WhatsappShareButton>
                                  </div>


                                  <div
                                    className="flex items-center rounded-xl w-full px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 truncate "
                                  >
                                    <LinkedinShareButton className="w-full" url={currentUrl} >
                                      <div className="flex flex-row items-center">
                                      <LinkedinIcon size={30} round />
                                      <span className="ms-3">LinkedIn</span>
                                      </div>
                                      
                                    
                                    </LinkedinShareButton>
                                  </div>
                                 
                                </div>
                              )}
                              {/* </div> */}
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
