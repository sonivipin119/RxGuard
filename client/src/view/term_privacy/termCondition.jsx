import React, { useState } from 'react';

function TermCondition() {
  const [accepted, setAccepted] = useState(false);

  return(
    <center className='m-6'>
      <div className=' text-3xl font-bold mb-4'>Terms and Conditions</div>
      <div className=' p-6 rounded-lg shadow-md max-w-2xl text-left'>
          <p><span className='font-bold'>Welcome to RxShield</span> - Prescription & Medical Record Verification System (“Platform”, “Service”). By accessing or using our website/application, you agree to be bound by the following Terms & Conditions. If you do not agree, you may not use the Service.</p>
      </div>
      <div className='p-6 rounded-lg shadow-md max-w-2xl text-left mt-4'>
        <ul className='list-decimal pl-6'>
          <li><span className='font-bold'>Eligibility</span>
            <ol className='list-disc pl-6'>
              <li>You must be at least 18 years old to use this Service.</li>
              <li>Healthcare providers must be licensed and authorized to issue prescriptions.</li>
            </ol>
          </li>
          <li><span className='font-bold'>Purpose of the Service</span>
            <ol className='list-disc pl-6'>
              <li>The Platform is designed to verify, store, and share digital medical prescriptions securely.</li>
              <li>We are not a substitute for professional medical advice, diagnosis, or treatment.</li>
            </ol>
          </li>
          <li><span className='font-bold'>User Responsibilities</span>
            <ol className='list-disc pl-6'>
              <li>Users must provide accurate and up-to-date information.</li>
              <li>Patients must use prescriptions only as advised by licensed doctors.</li>
              <li>Misuse of the system for fraudulent prescriptions or false information is strictly prohibited.</li>
            </ol>
          </li>
          <li><span className='font-bold'>Data Accuracy & Verification</span>
            <ol className='list-disc pl-6'>
              <li>We do not guarantee the completeness, accuracy, or reliability of prescriptions uploaded by healthcare providers.</li>
              <li>The responsibility for the authenticity of a prescription lies with the issuing doctor</li>
            </ol>
          </li>
          <li><span className='font-bold'>Intellectual Property</span>
            <ol className='list-disc pl-6'>
              <li>All content, design, and technology on the Platform are owned by [Your Company/Project Name].</li>
              <li>Users are not allowed to copy, modify, or distribute any part of the Service without permission.</li>
            </ol>
          </li>
          <li><span className='font-bold'>Limitation of Liability</span>
            <ol className='list-disc pl-6'>
              <li>We are not liable for any medical decisions taken based on prescriptions stored or verified through the Platform.</li>
              <li>We are not responsible for data breaches beyond reasonable security measures.</li>
            </ol>
          </li>
          <li><span className='font-bold'>Termination of Use</span>
            <ol className='list-disc pl-6'>
              <li>We may suspend or terminate user accounts in case of fraud, violation of terms, or misuse of the system.</li>
            </ol>
          </li>
          <li><span className='font-bold'>Governing Law</span>
            <ol className='list-disc pl-6'>
              <li>These Terms shall be governed by the laws of [Insert Country/State]. </li>
            </ol>
          </li>
        </ul>
      <div className='text-right mt-4'>
        <button className='ml-4 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium mt-2 hover:bg-blue-700 hover:scale-[1.02] transition transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' onClick={() => setAccepted(true)}>Accept</button>
        <button className='ml-4 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium mt-2 hover:bg-blue-700 hover:scale-[1.02] transition transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2' onClick={() => setAccepted(true)}>Decline</button>
      </div>
      </div>
    </center>
  );
}
export default TermCondition;
