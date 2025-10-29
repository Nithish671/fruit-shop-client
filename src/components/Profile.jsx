import React from "react";

const Profile = ({ user }) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">Profile</h1>

        <div className="space-y-4 text-lg">
          <p className="text-gray-700">
            <span className="font-semibold text-indigo-600">User:</span> {user.name}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold text-indigo-600">Email:</span> {user.email}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
