"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import Link from "next/link";
import {SubmitHandler, useForm} from "react-hook-form";
import {toast} from "sonner";
import {z} from "zod";

import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

import {Heading2, Heading3} from "@/utils/typography";

import {sendEmail} from "../_actions";
import {RenderIcon} from "../utils/render-icon";
import {SocialLink} from "./Header";

export const ContactFormSchema = z.object({
  name: z.string().nonempty("Name is required."),
  email: z.string().nonempty("Email is required.").email("Invalid email."),
  message: z
    .string()
    .nonempty("Message is required.")
    .min(6, {message: "Message must be at least 6 characters."}),
});

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

function ContactForm() {
  const form = useForm<ContactFormInputs>({
    resolver: zodResolver(ContactFormSchema),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: {isSubmitting},
  } = form;

  const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
    const result = await sendEmail(data);

    if (result?.success) {
      console.log({data: result.data});
      toast.success("Email sent!");
      reset();
      return;
    }

    // toast error
    console.log(result?.error);
    toast.error("Something went wrong!");
  };

  return (
    <Form {...form}>
      <form
        className="grid grid-cols-1 gap-6"
        onSubmit={handleSubmit(processForm)}
      >
        <FormField
          name="name"
          render={() => (
            <FormItem>
              <FormLabel
                className="text-neutral-800 font-medium text-sm block"
                htmlFor="name"
              >
                Full Name:
              </FormLabel>
              <FormControl>
                <Input
                  className="block w-full border-dark-300 border-2 focus:border-primary-300 focus:ring focus:ring-primary-200/50 bg-white   rounded-full text-sm font-normal h-11 px-4 py-3 mt-1"
                  type="text"
                  placeholder="John Doe"
                  {...register("name")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="email"
          render={() => (
            <FormItem>
              <FormLabel
                className="text-neutral-800 font-medium text-sm block"
                htmlFor="email"
              >
                Email:
              </FormLabel>
              <FormControl>
                <Input
                  className="block w-full border-dark-300 border-2 focus:border-primary-300 focus:ring focus:ring-primary-200/50 bg-white   rounded-full text-sm font-normal h-11 px-4 py-3 mt-1"
                  type="email"
                  placeholder="John.Doe@xyz.com"
                  {...register("email")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="message"
          render={() => (
            <FormItem>
              <FormLabel htmlFor="message">Your Message:</FormLabel>
              <FormControl>
                <Textarea
                  className="border-dark-300 border-2 block w-full text-sm rounded-xl border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white  mt-1"
                  placeholder="Hi there, I would like to..."
                  {...register("message")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isSubmitting}
          className="flex-shrink-0 relative h-auto inline-flex items-center justify-center rounded-full transition-colors border-transparent text-light bg-tla-primary hover:bg-primary-6000  text-sm container-sm:text-base font-medium py-3 px-4 container-sm:py-3.5 container-sm:px-6  "
          type="submit"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </Form>
  );
}

export default function ContactModal({
  children,
  socialLinks,
}: {
  children: React.ReactNode;
  socialLinks: Array<SocialLink>;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="container p-5 mx-auto bg-white rounded-xl container-sm:rounded-3xl container-lg:rounded-[40px] shadow-lg container-sm:p-10 
      container-lg:p-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        {/* <DialogContent className="container  bg-light absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 container-lg:p-8 rounded-3xl container-md:rounded-[40px] shadow-xl flex flex-col container-md:flex-row"> */}
        <div>
          {/* Header */}
          <header className="text-center max-w-2xl mx-auto - mb-14 container-sm:mb-16 container-lg:mb-28 ">
            <Heading2 className="flex items-center text-3xl leading-[115%] container-md:text-5xl container-md:leading-[115%] font-semibold text-neutral-900  justify-center">
              Contact us
            </Heading2>
            <span className="block text-sm mt-2 text-neutral-700 container-sm:text-base ">
              Drop us message and we will get back for you.
            </span>
          </header>
          {/* Body */}
          <div className="grid gap-8 container-lg:grid-cols-2">
            <div className="max-w-sm space-y-6">
              {/* <div>
                <Heading3 className="uppercase font-semibold text-sm  tracking-wider">
                  🗺 ADDRESS
                </Heading3>
                <span className="block mt-2 text-neutral-500 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum, eaque.
                </span>
              </div> */}
              <div>
                <Heading3 className="uppercase font-semibold text-sm  tracking-wider">
                  💌 EMAIL
                </Heading3>
                <span className="block mt-2 text-neutral-500 ">
                  info@truthandlifeacademy.org
                </span>
              </div>
              {/* <div>
                <Heading3 className="uppercase font-semibold text-sm  tracking-wider">
                  ☎ PHONE
                </Heading3>
                <span className="block mt-2 text-neutral-500 ">
                  000-123-456-7890
                </span>
              </div> */}
              <div>
                <Heading3 className="uppercase font-semibold text-sm  tracking-wider">
                  🌏 SOCIALS
                </Heading3>
                <nav className="flex space-x-3 text-2xl text-neutral-600  ">
                  {socialLinks.map((link: SocialLink) => {
                    return (
                      <Link
                        key={link.id}
                        rel="noopener noreferrer"
                        href={link.url}
                        title={link.text}
                        className=" w-7 h-7 container-sm:w-8 container-sm:h-8 flex items-center justify-center rounded-full text-xl hover:bg-tla-accent hover:text-white transition-all duration-300
                            "
                      >
                        <div>
                          <RenderIcon className="w-5 h-5" text={link.social} />
                        </div>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
            <div className="border border-neutral-100  container-lg:hidden" />
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
