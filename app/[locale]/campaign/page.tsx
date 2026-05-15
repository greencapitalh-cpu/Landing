import CampaignLanding from "@/components/CampaignLanding";

export default function CampaignPage({ params }: { params: { locale: string } }) {
  return <CampaignLanding locale={params.locale} campaign="validate" />;
}
