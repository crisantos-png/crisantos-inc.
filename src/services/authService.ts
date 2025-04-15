
import { toast } from "@/components/ui/use-toast";

interface AdminUser {
  username: string;
  isAuthenticated: boolean;
  lastLogin: Date | null;
}

// In a real app, this would be stored securely on a backend
const ADMIN_PASSWORD = "@Anonymousfemboy€€€";
let currentUser: AdminUser | null = null;

// Simulate password rotation notification
const simulatePasswordRotation = () => {
  // In a real app, this would connect to a backend service
  // that handles actual password rotation and notifications
  console.log("Password rotation simulation active");
  
  // Simulate weekly password rotation (this is just for demo purposes)
  // In a real app, this would be handled securely on the backend
  setInterval(() => {
    toast({
      title: "Security Alert",
      description: "Your admin password has been rotated. Check your email for the new password.",
    });
  }, 604800000); // 7 days in milliseconds
};

export const loginAdmin = (password: string): boolean => {
  if (password === ADMIN_PASSWORD) {
    currentUser = {
      username: "admin",
      isAuthenticated: true,
      lastLogin: new Date()
    };
    
    // Start password rotation simulation
    simulatePasswordRotation();
    
    // In a real app, we'd save this to secure storage
    sessionStorage.setItem("adminLoggedIn", "true");
    return true;
  }
  return false;
};

export const logoutAdmin = (): void => {
  currentUser = null;
  sessionStorage.removeItem("adminLoggedIn");
};

export const isAdminLoggedIn = (): boolean => {
  // Check session storage for persistence across page refreshes
  return sessionStorage.getItem("adminLoggedIn") === "true" || 
    (currentUser !== null && currentUser.isAuthenticated);
};
