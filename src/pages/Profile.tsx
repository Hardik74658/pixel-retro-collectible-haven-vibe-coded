
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Package,
  Heart,
  Settings,
  LogOut,
  Mail,
  Phone,
  Home as HomeIcon,
  Calendar,
  Edit,
  Unlock,
  Save,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sample order data
const orders = [
  {
    id: "ORD-12345",
    date: "2025-04-12",
    status: "Completed",
    items: [
      { id: 1, name: "Pixel Hero Character", price: 49.99 },
      { id: 4, name: "Pixel Treasure Chest", price: 39.99 }
    ],
    total: 89.98
  },
  {
    id: "ORD-12346",
    date: "2025-04-05",
    status: "Shipped",
    items: [
      { id: 3, name: "Fantasy Dragon", price: 89.99 }
    ],
    total: 89.99
  }
];

// Sample wishlist data
const wishlist = [
  {
    id: 2,
    name: "Retro Space Ship",
    price: 69.99,
    dateAdded: "2025-04-10"
  },
  {
    id: 6,
    name: "Pixel Art Castle",
    price: 79.99,
    dateAdded: "2025-04-09"
  },
  {
    id: 8,
    name: "Pixel Art Potion Set",
    price: 34.99,
    dateAdded: "2025-04-05"
  }
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  
  // User profile data - would come from a backend in a real app
  const [userProfile, setUserProfile] = useState({
    name: "Pixel Adventurer",
    email: "adventurer@pixelhaven.com",
    phone: "+1 234 567 8901",
    address: "123 Arcade Lane, Pixelville, PX 12345",
    birthday: "1990-04-16"
  });
  
  const [formData, setFormData] = useState({
    ...userProfile
  });
  
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordForm(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSave = () => {
    setUserProfile(formData);
    setIsEditing(false);
  };
  
  const handleChangePassword = () => {
    // In a real app, this would send the password change to a backend
    // For now, we'll just reset the form and close it
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
    setIsChangingPassword(false);
    // You could show a toast notification here
  };
  
  const cancelEdit = () => {
    setFormData(userProfile);
    setIsEditing(false);
  };
  
  const getRandomColorClass = () => {
    const colorClasses = [
      "bg-retro-red",
      "bg-retro-blue",
      "bg-retro-yellow",
      "bg-retro-green",
      "bg-retro-purple",
      "bg-retro-orange",
      "bg-retro-pink",
    ];
    return colorClasses[Math.floor(Math.random() * colorClasses.length)];
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="pixel-container py-10">
          <div className="flex items-center mb-6">
            <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold mx-auto">Your Account</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* User info panel */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <Avatar className="h-20 w-20 mx-auto mb-4">
                  <AvatarImage src="" alt="User avatar" />
                  <AvatarFallback className="bg-retro-blue text-white">PA</AvatarFallback>
                </Avatar>
                
                <h2 className="text-xl font-semibold">{userProfile.name}</h2>
                <p className="text-muted-foreground text-sm mb-6">{userProfile.email}</p>
                
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => setActiveTab("profile")}
                  >
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => setActiveTab("orders")}
                  >
                    <Package className="mr-2 h-4 w-4" />
                    My Orders
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => setActiveTab("wishlist")}
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Wishlist
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start"
                    onClick={() => setActiveTab("settings")}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start text-muted-foreground"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Main content area */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-xl shadow-sm p-6">
                {activeTab === "profile" && (
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-semibold">Profile Information</h2>
                      {!isEditing && (
                        <Button 
                          variant="outline" 
                          onClick={() => setIsEditing(true)}
                          className="bg-retro-pink/10 hover:bg-retro-pink/20 text-retro-pink border-retro-pink/20"
                        >
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Profile
                        </Button>
                      )}
                    </div>
                    
                    {isEditing ? (
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium mb-1 block">Full Name</label>
                          <Input 
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Email Address</label>
                          <Input 
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Phone Number</label>
                          <Input 
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Address</label>
                          <Input 
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1 block">Birthday</label>
                          <Input 
                            type="date"
                            name="birthday"
                            value={formData.birthday}
                            onChange={handleInputChange}
                          />
                        </div>
                        
                        <div className="flex gap-2 pt-2">
                          <Button
                            className="bg-retro-green hover:bg-retro-green/90 text-white"
                            onClick={handleSave}
                          >
                            <Save className="mr-2 h-4 w-4" />
                            Save Changes
                          </Button>
                          <Button
                            variant="outline"
                            onClick={cancelEdit}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h3 className="text-sm font-medium text-muted-foreground">Full Name</h3>
                            <p className="mt-1">{userProfile.name}</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-muted-foreground">Email Address</h3>
                            <div className="mt-1 flex items-center">
                              <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                              <p>{userProfile.email}</p>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-muted-foreground">Phone Number</h3>
                            <div className="mt-1 flex items-center">
                              <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                              <p>{userProfile.phone}</p>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-muted-foreground">Address</h3>
                            <div className="mt-1 flex items-center">
                              <HomeIcon className="h-4 w-4 mr-2 text-muted-foreground" />
                              <p>{userProfile.address}</p>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-muted-foreground">Birthday</h3>
                            <div className="mt-1 flex items-center">
                              <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                              <p>{new Date(userProfile.birthday).toLocaleDateString()}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === "orders" && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Order History</h2>
                    {orders.length > 0 ? (
                      <div className="space-y-4">
                        {orders.map(order => (
                          <div key={order.id} className="border rounded-lg p-4">
                            <div className="flex flex-wrap justify-between items-center mb-2">
                              <div>
                                <span className="font-semibold">Order ID: {order.id}</span>
                                <span className="text-sm text-muted-foreground ml-4">
                                  {new Date(order.date).toLocaleDateString()}
                                </span>
                              </div>
                              <div>
                                <span className={`text-sm px-3 py-1 rounded-full ${
                                  order.status === "Completed" 
                                    ? "bg-green-100 text-green-800" 
                                    : "bg-blue-100 text-blue-800"
                                }`}>
                                  {order.status}
                                </span>
                              </div>
                            </div>
                            
                            <Separator className="my-3" />
                            
                            <div className="space-y-2">
                              {order.items.map(item => (
                                <div key={item.id} className="flex justify-between">
                                  <span>{item.name}</span>
                                  <span>${item.price.toFixed(2)}</span>
                                </div>
                              ))}
                            </div>
                            
                            <Separator className="my-3" />
                            
                            <div className="flex justify-between font-semibold">
                              <span>Total:</span>
                              <span>${order.total.toFixed(2)}</span>
                            </div>
                            
                            <div className="mt-4">
                              <Button variant="outline" size="sm">View Details</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-lg font-semibold mb-2">No orders yet</h3>
                        <p className="text-muted-foreground mb-4">You haven't placed any orders yet.</p>
                        <Button asChild>
                          <Link to="/shop">Start Shopping</Link>
                        </Button>
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === "wishlist" && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Your Wishlist</h2>
                    {wishlist.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {wishlist.map(item => (
                          <div key={item.id} className="border rounded-lg p-4 flex">
                            {/* Simple pixel art placeholder */}
                            <div className="w-16 h-16 mr-4 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                              <div className="w-3/4 h-3/4 grid grid-cols-8 grid-rows-8 gap-0.5">
                                {Array.from({ length: 64 }).map((_, index) => (
                                  <div 
                                    key={index} 
                                    className={`${
                                      (index % (item.id * 2) === 0 || index % (item.id * 3) === 0) 
                                        ? getRandomColorClass()
                                        : "bg-gray-100"
                                    }`}
                                  ></div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex-grow">
                              <div className="flex justify-between">
                                <h3 className="font-semibold">{item.name}</h3>
                                <span className="text-muted-foreground text-sm">
                                  Added {new Date(item.dateAdded).toLocaleDateString()}
                                </span>
                              </div>
                              <p className="text-lg font-medium mt-1">${item.price.toFixed(2)}</p>
                              <div className="mt-2 flex space-x-2">
                                <Button size="sm" className="bg-retro-blue hover:bg-retro-blue/90 text-white">
                                  Add to Cart
                                </Button>
                                <Button size="sm" variant="outline">
                                  Remove
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <Heart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Your wishlist is empty</h3>
                        <p className="text-muted-foreground mb-4">Save items you like for later.</p>
                        <Button asChild>
                          <Link to="/shop">Browse Shop</Link>
                        </Button>
                      </div>
                    )}
                  </div>
                )}
                
                {activeTab === "settings" && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">Account Settings</h2>
                    
                    <Tabs defaultValue="password">
                      <TabsList className="mb-4">
                        <TabsTrigger value="password">Password</TabsTrigger>
                        <TabsTrigger value="notifications">Notifications</TabsTrigger>
                        <TabsTrigger value="preferences">Preferences</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="password">
                        <div className="space-y-4">
                          <h3 className="text-xl font-medium">Change Password</h3>
                          <p className="text-muted-foreground">
                            Update your password to keep your account secure.
                          </p>
                          
                          {isChangingPassword ? (
                            <div className="mt-6 space-y-4">
                              <div>
                                <label className="text-sm font-medium mb-1 block">Current Password</label>
                                <Input 
                                  type="password"
                                  name="currentPassword"
                                  value={passwordForm.currentPassword}
                                  onChange={handlePasswordChange}
                                />
                              </div>
                              <div>
                                <label className="text-sm font-medium mb-1 block">New Password</label>
                                <Input 
                                  type="password"
                                  name="newPassword"
                                  value={passwordForm.newPassword}
                                  onChange={handlePasswordChange}
                                />
                              </div>
                              <div>
                                <label className="text-sm font-medium mb-1 block">Confirm New Password</label>
                                <Input 
                                  type="password"
                                  name="confirmPassword"
                                  value={passwordForm.confirmPassword}
                                  onChange={handlePasswordChange}
                                />
                              </div>
                              
                              <div className="flex gap-2 pt-2">
                                <Button
                                  className="bg-retro-green hover:bg-retro-green/90 text-white"
                                  onClick={handleChangePassword}
                                >
                                  <Save className="mr-2 h-4 w-4" />
                                  Update Password
                                </Button>
                                <Button
                                  variant="outline"
                                  onClick={() => setIsChangingPassword(false)}
                                >
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <Button 
                              onClick={() => setIsChangingPassword(true)}
                              className="mt-2"
                            >
                              <Unlock className="mr-2 h-4 w-4" />
                              Change Password
                            </Button>
                          )}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="notifications">
                        <div className="space-y-4">
                          <h3 className="text-xl font-medium">Notification Settings</h3>
                          <p className="text-muted-foreground">
                            Manage how you receive notifications about orders, promotions, and news.
                          </p>
                          
                          <div className="mt-6">
                            <p className="text-center text-muted-foreground py-8">
                              Notification preferences coming soon!
                            </p>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="preferences">
                        <div className="space-y-4">
                          <h3 className="text-xl font-medium">User Preferences</h3>
                          <p className="text-muted-foreground">
                            Customize your shopping experience.
                          </p>
                          
                          <div className="mt-6">
                            <p className="text-center text-muted-foreground py-8">
                              User preferences coming soon!
                            </p>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
