import { TemplatesList } from "../_components/templates-list";

export default function NewResumePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Choose a Template</h1>
      <p className="text-gray-600 mb-8">
        Select a template to start building your perfect resume
      </p>

      <TemplatesList />
    </div>
  );
}
