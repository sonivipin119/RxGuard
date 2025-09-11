import React, { useState } from 'react';

function PrivacyPolicy() {
  const [accepted, setAccepted] = useState(false);

  return (
    <center className='m-6'>
      <div className='text-3xl font-bold mb-4'>Privacy Policy</div>
      <div className='p-6 rounded-lg shadow-md max-w-2xl text-left'>
        <p>
          <span className='font-bold'>RxShield</span> respects your privacy. This Privacy Policy explains how we collect, 
          use, and protect your personal and medical data. By using our Platform, 
          you agree to the practices described in this Policy.
        </p>
      </div>
      <div className='p-6 rounded-lg shadow-md max-w-2xl text-left mt-4'>
        <ul className='list-decimal pl-6'>
          <li>
            <span className='font-bold'>Information We Collect</span>
            <ol className='list-disc pl-6'>
              <li>Personal Information: Name, email, phone, date of birth.</li>
              <li>Medical Data: Prescriptions, medical records, doctor details.</li>
              <li>Technical Data: IP address, device information, browser type.</li>
            </ol>
          </li>
          <li>
            <span className='font-bold'>How We Use Your Information</span>
            <ol className='list-disc pl-6'>
              <li>To verify and store medical prescriptions securely.</li>
              <li>To allow healthcare providers and pharmacies to validate authenticity.</li>
              <li>To comply with legal and regulatory requirements.</li>
            </ol>
          </li>
          <li>
            <span className='font-bold'>Data Sharing & Disclosure</span>
            <ol className='list-disc pl-6'>
              <li>We share prescription data only with verified healthcare professionals and pharmacies.</li>
              <li>We do not sell or rent your data to third parties.</li>
              <li>We may disclose data if required by law.</li>
            </ol>
          </li>
          <li>
            <span className='font-bold'>Data Security</span>
            <ol className='list-disc pl-6'>
              <li>We use encryption, authentication, and access controls to protect your information.</li>
              <li>No system is 100% secure; users accept the risk of data breaches beyond reasonable measures.</li>
            </ol>
          </li>
          <li>
            <span className='font-bold'>User Rights</span>
            <ol className='list-disc pl-6'>
              <li>You can request access, correction, or deletion of your data.</li>
              <li>You can withdraw consent for data usage (subject to legal requirements).</li>
            </ol>
          </li>
          <li>
            <span className='font-bold'>Cookies & Tracking</span>
            <ol className='list-disc pl-6'>
              <li>We may use cookies to improve user experience and site functionality.</li>
              <li>You may disable cookies in your browser settings.</li>
            </ol>
          </li>
          <li>
            <span className='font-bold'>Children’s Privacy</span>
            <ol className='list-disc pl-6'>
              <li>Our Platform is not intended for users under 18 years old.</li>
            </ol>
          </li>
          <li>
            <span className='font-bold'>Changes to Privacy Policy</span>
            <ol className='list-disc pl-6'>
              <li>We may update this Privacy Policy periodically.</li>
              <li>Continued use of the Platform means you accept the updated policy.</li>
            </ol>
          </li>
          <li>
            <span className='font-bold'>Contact Us</span>
            <ol className='list-disc pl-6'>
              <li>Email: [Your Email]</li>
              <li>Address: [Your Address]</li>
            </ol>
          </li>
        </ul>
      
      </div>
    </center>
  );
}

export default PrivacyPolicy;
