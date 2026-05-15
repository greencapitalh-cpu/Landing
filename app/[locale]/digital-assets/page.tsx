import CampaignLanding from "@/components/CampaignLanding";

export default function DigitalAssetsPage({ params }: { params: { locale: string } }) {
  return <CampaignLanding locale={params.locale} campaign="digital-assets" />;
}
