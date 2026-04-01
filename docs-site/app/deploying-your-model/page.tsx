import { Callout } from '@/components/Callout';

export default function DeployingYourModelPage() {
  return (
    <div className="docs-content">
      <h1>Deploying Your Model</h1>
      <p>
        We currently use Azure Microsoft Foundry to connect, deploy and monitor our models.
      </p>

      <h2>Guidelines When Deploying Your Model</h2>
      <ol>
        <li>Ensure your project has been deployed the UK or EU region, Sweden Central region is the best option for model coverage</li>
        <li>Before deployment ensure the model selected are hosted in the UK or EU Region</li>
        <li>Either select or add the appropriate content filtering for your model to ensure it is compliant to the project specifications</li>
        <li>Ensure the generated endpoints are stored in your .env file and labelled appropriately</li>
      </ol>

       </div>
  );
}
