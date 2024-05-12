import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <div className="w-full bg-blue-800 p-10">
        <h1 className="text-white text-3xl py-3">FishMaster</h1>
        <h3 className="text-white text-xl">Privacy Policy</h3>
      </div>
      <div className="m-4 border border-gray-400 ">
        <div className="p-8 space-y-3">
          <p className="font-bold text-xl">Introduction</p>
          <p>
            Fishmaster operates the Fishmaster Application platform, which
            provides the SERVICE.
          </p>
          <p>
            This page is used to inform platform visitors regarding our policies
            with the collection, use, and disclosure of Personal Information if
            anyone decided to use our Service, the Fishmaster application
          </p>
          <p>
            If you choose to use our Service, then you agree to the collection
            and use of information in relation with this policy. The Personal
            Information that we collect are used for providing and improving the
            Service. We will not use or share your information with anyone
            except as described in this Privacy Policy.
          </p>
        </div>

        <div className="p-8 space-y-3">
          <p className="font-bold text-xl">Information collection and use</p>
          <p>
            For a better experience while using our Service, we may require you
            to provide us with certain personally identifiable information,
            including but not limited to your name, email address, phone number,
            and location. The information that we collect will be used to
            contact or identify you.
          </p>
          <p>
            We want to inform you that whenever you visit our Service, we
            collect information that your device sends to us that is called Log
            Data. This Log Data may include information such as your computer's
            Internet Protocol ("IP") address, browser version, pages of our
            Service that you visit, the time and date of your visit, the time
            spent on those pages, and other statistics.
          </p>
        </div>

        <div className="p-8 space-y-3">
          <p className="font-bold text-xl">Service Providers</p>
          <p>
            We may employ third-party companies and individuals due to the
            following reasons:
          </p>
          <ul>
            <li>To facilitate our Service;</li>
            <li>To provide the Service on our behalf;</li>
            <li>To perform Service-related services; or </li>
            <li>To assist us in analyzing how our Service is used.</li>
          </ul>
          <p>
            We want to inform our Service users that these third parties have
            access to your Personal Information. The reason is to perform the
            tasks assigned to them on our behalf. However, they are obligated
            not to disclose or use the information for any other purpose.
          </p>
        </div>

        <div className="p-8 space-y-3">
          <p className="font-bold text-xl">Security</p>
          <p>
            We value your trust in providing us your Personal Information, thus
            we are striving to use commercially acceptable means of protecting
            it. But remember that no method of transmission over the internet,
            or method of electronic storage is 100% secure and reliable, and we
            cannot guarantee its absolute security.
          </p>
        </div>

        <div className="p-8 space-y-3">
          <p className="font-bold text-xl">Change to this Privacy Policy</p>
          <p>
            We may update our Privacy Policy from time to time. Thus, we advise
            you to review this page periodically for any changes. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            These changes are effective immediately, after they are posted on
            this page.
          </p>
        </div>

        <div className="p-8 space-y-3">
          <p className="font-bold text-xl">Contact Us</p>
          <p>
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us at oofishmaster@gmail.com
          </p>
        </div>
      </div>
    </main>
  );
}
