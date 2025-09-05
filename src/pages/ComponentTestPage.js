import React from 'react';
import Button from '../components/Button.js';
import Card from '../components/Card.js';
import Badge from '../components/Badge.js';
import Rating from '../components/Rating.js';
import { Input, Textarea, Checkbox, RadioButton } from '../components/FormComponents.js';

const ComponentTestPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Component Test Page</h1>
          <p className="text-lg text-gray-600">Testing all design system components</p>
        </div>

        {/* Buttons Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Buttons</h2>
          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="accent">Accent Button</Button>
              </div>
              <div className="space-y-4">
                <Button size="sm">Small Button</Button>
                <Button size="md">Medium Button</Button>
                <Button size="lg">Large Button</Button>
                <Button fullWidth>Full Width Button</Button>
              </div>
            </div>
          </Card>
        </section>

        {/* Form Components Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Form Components</h2>
          <Card className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Input label="Name" id="name" placeholder="Enter your name" />
                <Input label="Email" id="email" type="email" placeholder="Enter your email" />
                <Textarea label="Message" id="message" placeholder="Enter your message" rows={4} />
                <Checkbox label="Subscribe to newsletter" id="newsletter" />
              </div>
              <div className="space-y-4">
                <Input label="Password" id="password" type="password" placeholder="Enter your password" />
                <RadioButton label="Male" id="male" />
                <RadioButton label="Female" id="female" />
                <div className="flex items-center justify-between">
                  <Button variant="primary">Submit</Button>
                  <Button variant="secondary">Cancel</Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Badges Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Badges</h2>
          <Card className="p-6">
            <div className="flex flex-wrap gap-4">
              <Badge variant="default">Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="info">Info</Badge>
              <Badge variant="dark">Dark</Badge>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <Badge size="sm">Small</Badge>
              <Badge size="md">Medium</Badge>
              <Badge size="lg">Large</Badge>
            </div>
          </Card>
        </section>

        {/* Rating Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Rating</h2>
          <Card className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Basic Rating</h3>
                <Rating value={3.5} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">With Review Count</h3>
                <Rating value={4.5} count={128} />
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ComponentTestPage;