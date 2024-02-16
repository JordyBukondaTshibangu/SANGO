/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import PrivacyImg from "../../../../../public/assets/Undraw/privacy.svg";

const PrivacyTermsPage = () => {
  return (
    <div className="flex flex-col gap-20 xl:px-32">
      <div className="flex items-center justify-center w-full mb-10">
        <Image src={PrivacyImg} width={300} height={300} alt="" />
      </div>
      <h1 className="text-4xl">Privacy Policy</h1>
      <div className="flex flex-col gap-6">
        <p>Effective May 5, 2024</p>
        <h4 className="text-2xl font-bold mt-10">Your Privacy Matters</h4>
        <p>
          Sango's mission is to connect the world’s professionals to allow them
          to be more productive and successful. Central to this mission is our
          commitment to be transparent about the data we collect about you, how
          it is used and with whom it is shared.
        </p>
        <p>
          This Privacy Policy applies when you use our Services (described
          below). We offer our users choices about the data we collect, use and
          share as described in this Privacy Policy, Cookie Policy, Settings and
          our Help Center.
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <h4 className="text-2xl font-bold">Table of Contents</h4>
        <ol className="px-5 flex flex-col gap-5">
          <li className="text-[16px]">
            1.
            <span className="text-white px-5 font-medium text-[16px]">
              Data We Collect
            </span>
          </li>
          <li className="text-[16px]">
            2.
            <span className="text-white px-5 font-medium text-[16px]">
              How We Use Your Data
            </span>
          </li>
          <li className="text-[16px]">
            3.
            <span className="text-white px-5 font-medium text-[16px]">
              How We Share Information
            </span>
          </li>
        </ol>
      </div>
      <div className="flex flex-col gap-6">
        <h4 className="text-2xl font-bold">1. Data We Collect</h4>
        <div className="flex flex-col gap-4 px-10">
          <h5 className="text-lg font-light italic">Registration</h5>
          <p>
            To create an account you need to provide data including your name,
            email address and/or mobile number, and a password. If you register
            for a premium Service, you will need to provide payment (e.g.,
            credit card) and billing information.
          </p>
        </div>
        <div className="flex flex-col gap-4 px-10">
          <h5 className="text-lg font-light italic">Profile</h5>
          <p>
            You have choices about the information on your profile, such as your
            education, work experience, skills, photo, city or area and
            endorsements. You don’t have to provide additional information on
            your profile; however, profile information helps you to get more
            from our Services, including helping recruiters and business
            opportunities find you. It’s your choice whether to include
            sensitive information on your profile and to make that sensitive
            information public. Please do not post or add personal data to your
            profile that you would not want to be publicly available.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h4 className="text-2xl font-bold">2. How We Use Your Data</h4>
        <div className="flex flex-col gap-4 px-10">
          <h5 className="text-lg font-light italic">Registration</h5>
          <p>
            How we use your personal data will depend on which Services you use,
            how you use those Services and the choices you make in your
            settings. We use the data that we have about you to provide and
            personalize our Services, including with the help of automated
            systems and inferences we make, so that our Services (including ads)
            can be more relevant and useful to you and others..
          </p>
        </div>
        <div className="flex flex-col gap-4 px-10">
          <h5 className="text-lg font-light italic">Stay Connected</h5>
          <p>
            Our Services allow you to stay in touch and up to date with
            colleagues, partners, clients, and other professional contacts. To
            do so, you can “connect” with the professionals who you choose, and
            who also wish to “connect” with you. Subject to your and their
            settings, when you connect with other Members, you will be able to
            search each others’ connections in order to exchange professional
            opportunities.
          </p>
        </div>
        <div className="flex flex-col gap-4 px-10">
          <h5 className="text-lg font-light italic">Stay Informed</h5>
          <p>
            Our Services allow you to stay informed about news, events and ideas
            regarding professional topics you care about, and from professionals
            you respect. Our Services also allow you to improve your
            professional skills, or learn new ones. We use the data we have
            about you (e.g., data you provide, data we collect from your
            engagement with our Services and inferences we make from the data we
            have about you), to personalize our Services for you, such as by
            recommending or ranking relevant content and conversations on our
            Services. We also use the data we have about you to suggest skills
            you could add to your profile and skills that you might need to
            pursue your next opportunity.
          </p>
        </div>
        <div className="flex flex-col gap-4 px-10">
          <h5 className="text-lg font-light italic">Career</h5>
          <p>
            Our Services allow you to explore careers, evaluate educational
            opportunities, and seek out, and be found for, career opportunities.
            Your profile can be found by those looking to hire (for a job or a
            specific task) or be hired by you. We will use your data to
            recommend jobs or mentees, show you and others relevant professional
            contacts (e.g., who work at a company, in an industry, function or
            location or have certain skills and connections). You can signal
            that you are interested in changing jobs and share information with
            recruiters. We will use your data to recommend jobs to you and you
            to recruiters. We may use automated systems to provide content and
            recommendations to help make our Services more relevant to our
            Members, Visitors and customers. Keeping your profile accurate and
            up-to-date may help you better connect to others and to
            opportunities through our Services..
          </p>
        </div>
        <div className="flex flex-col gap-4 px-10">
          <h5 className="text-lg font-light italic">Communications</h5>
          <p>
            We will contact you through email, mobile phone, notices posted on
            our websites or apps, messages to your Sango inbox, and other ways
            through our Services, including text messages and push
            notifications. We will send you messages about the availability of
            our Services, security, or other service-related issues. We also
            send messages about how to use our Services, network updates,
            reminders, job suggestions and promotional messages from us and our
            partners. You may change your communication preferences at any time.
            Please be aware that you cannot opt out of receiving service
            messages from us, including security and legal notices.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h4 className="text-2xl font-bold">3. How We Share Information</h4>
        <div className="flex flex-col gap-4 px-10">
          <h5 className="text-lg font-light italic">Registration</h5>
          <p>
            It is possible that we will need to disclose information about you
            when required by law, subpoena, or other legal process or if we have
            a good faith belief that disclosure is reasonably necessary to (1)
            investigate, prevent or take action regarding suspected or actual
            illegal activities or to assist government enforcement agencies; (2)
            enforce our agreements with you; (3) investigate and defend
            ourselves against any third-party claims or allegations; (4) protect
            the security or integrity of our Services (such as by sharing with
            companies facing similar threats); or (5) exercise or protect the
            rights and safety of Sango, our Members, personnel or others. We
            attempt to notify Members about legal demands for their personal
            data when appropriate in our judgment, unless prohibited by law or
            court order or when the request is an emergency. We may dispute such
            demands when we believe, in our discretion, that the requests are
            overbroad, vague or lack proper authority, but we do not promise to
            challenge every demand
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyTermsPage;
