import AccountSidebar from '@/app/components/Account/AccountSidebar';
import EditProfileForm from '@/app/components/Account/EditProfileForm';

const Account = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <div className="flex-grow w-full px-4 sm:px-6 md:px-10 2xl:px-[10%] my-[20px] mb-20">
        {/* Breadcrumb Navigation */}
        <p className="py-10">
          <span className="text-gray-500">Home / </span>
          Account
        </p>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <AccountSidebar />
          <EditProfileForm />
        </div>
      </div>
    </div>
  );
};

export default Account;
