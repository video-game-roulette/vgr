import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Link
      to="/about-us"
      className="flex justify-end text-white mr-10 mb-5 relative bottom-0 right-0"
    >
      About Us
    </Link>
  );
}
