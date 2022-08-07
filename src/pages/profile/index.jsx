import Head from "next/head";
import { Footer } from "src/components/footer/Footer";
import { Header } from "src/components/Header/Header";
import { MyProfile } from "src/components/profile/Profile";

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
