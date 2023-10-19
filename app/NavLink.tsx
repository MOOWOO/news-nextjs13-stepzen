import {useRouter } from 'next/navigation';
import Link from "next/link";

type Props = {
  category: string;
  isActive: boolean;
};

function NavLink({ category, isActive }: Props) {
  const router = useRouter();

  const onClick = async (event) => {
   event.preventDefault();
  //  updateDialogVars(...yourConfig);
   if(true) {
    alert("Make Sort Function!!")
    await router.push(event.target.href);
   }
  }
 

  return (
    <Link
      href={`/news/${category}`} passHref
      className={`navLink ${
        isActive &&
        "underline decoration-orange-400 underline-offset-4 font-bold text-lg"
      }`}
      onClick={onClick}
    >
    {category}
    </Link>
  );
}

export default NavLink;
