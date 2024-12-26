import { getCurrentUser } from "@/entities/user/lib/userService";
import { useEffect } from "react";

const DashboardPage = () => {
  useEffect(() => {
    getCurrentUser();
  }, []);

  return <div>DashboardPage</div>;
};

export default DashboardPage;
