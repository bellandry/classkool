import { onGetAffiliateInfo } from "@/actions/groups";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

type CreateGroupeProps = {
  searchParams: { [affiliate: string]: string };
};

const CreateGroupPage = async ({ searchParams }: CreateGroupeProps) => {
  const user = await currentUser();

  if (!user || !user.id) redirect("/sign-in");

  const affiliate = await onGetAffiliateInfo(searchParams.affiliate);
  return (
    <>
      <p>{user.username}</p>
      <div>{affiliate.user?.Group?.User.firstname}</div>
    </>
  );
};

export default CreateGroupPage;
