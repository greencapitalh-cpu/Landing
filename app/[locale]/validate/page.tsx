import CampaignLanding from "@/components/CampaignLanding";

export default function ValidatePage({ params }: { params: { locale: string } }) {
  return <CampaignLanding locale={params.locale} campaign="validate" />;
}
