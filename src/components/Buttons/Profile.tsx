import { useSession } from "next-auth/react";
import { VscAccount } from "react-icons/vsc";
import Link from "next/link";

function Profile() {
  const { data } = useSession();

  return (
    <Link href={"/profile"}>
      <figure className={"flex flex-row-reverse items-center hover:cursor-pointer"}>
        {data?.user?.image ? <img className={"w-10 h-10 rounded-lg"} src={data?.user?.image} alt="Profile" /> : <VscAccount size={24} />}
        <figcaption className={"mr-4"}>{data?.user?.name}</figcaption>
      </figure>
    </Link>
  );
}

export default Profile;
