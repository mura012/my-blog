import Head from "next/head";
import { Footer } from "src/components/footer/Footer";
import { Header } from "src/components/Header";
import { MyProfile } from "src/components/profile";

const Profile = () => {
  return (
    <>
      <Head>
        <title>profile</title>
      </Head>
      <Header />
      <MyProfile />
      <Footer />
    </>
  );
};

export default Profile;
