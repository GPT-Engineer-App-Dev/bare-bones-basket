import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to Your App</h1>
      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>Here's what you can do with this app</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            <li>Explore different pages using the sidebar navigation</li>
            <li>Customize the content and layout of each page</li>
            <li>Add new features and functionality as needed</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
