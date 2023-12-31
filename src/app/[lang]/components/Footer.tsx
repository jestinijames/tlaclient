"use client";

import LayoutContainer from "@/components/ui/layout-container";

import ContactModal from "./contact-modal";
import {SocialLink} from "./Header";
import {Button} from "./ui/button";

export default function Footer({
  logoText,
  socialLinks,
}: {
  logoText: string | null;
  socialLinks: Array<SocialLink>;
}) {
  return (
    <footer className="w-full border-t-2 border-solid font-medium text-lg text-light border-light sm:text-base">
      <LayoutContainer className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span className="flex items-center lg:py-2">{logoText}</span>
        {/* <div className="flex items-center lg:py-2">{logoText}</div> */}
        <ContactModal socialLinks={socialLinks}>
          <Button type="button" className="underline underline-offset-2">
            Contact Us
          </Button>
        </ContactModal>
      </LayoutContainer>
    </footer>
  );
}
