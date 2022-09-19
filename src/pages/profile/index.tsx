import Head from "next/head";
import { Header } from "src/components/Header";
import { MyProfile } from "src/components/MyProfile";

const Profile = () => {
  return (
    <>
      <Head>
        <title>profile</title>
      </Head>
      <Header />
      <MyProfile />
    </>
  );
};

export default Profile;
