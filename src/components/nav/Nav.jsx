import React from "react";
import Link from "next/link";

const Nav = () => {
  const Links=[
    {
        id:1,
        title:'home',
        url:'/'
    },
    {
        id:2,
        title:'about',
        url:'/about'
    },
    {
        id:3,
        title:'blog',
        url:'/blog'
    },
    {
        id:4,
        title:'contact',
        url:'/contact'
    },
    {
        id:5,
        title:'portfolio',
        url:'/portfolio'
    },
    {
        id:6,
        title:'dashboard',
        url:'/dashboard'
    },
  ]

  return (
    <div>
      <Link href="/">Sakthi</Link>
       <div>
        {Links.map((link)=>(
            <Link key={link.id} href={link.url} >{link.title} </Link>
        ))}
       </div>
    </div>
  );
};

export default Nav;
