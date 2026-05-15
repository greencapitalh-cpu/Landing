import CampaignLanding from "@/components/CampaignLanding";

export default function SmartContractsPage({ params }: { params: { locale: string } }) {
  return <CampaignLanding locale={params.locale} campaign="smart-contracts" />;
}
