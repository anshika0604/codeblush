import { AffiliateGuide } from "@/types/affiliate-guide";

import { codingDeskSetup } from "@/data/coding-desk-setup";
import { rebuiltCodingDesk } from "@/data/rebuilt-coding-desk";

export const affiliateGuides: Record<string, AffiliateGuide> = {
  
  desktop_in_budget: codingDeskSetup,
  rebuilt_coding_desk: rebuiltCodingDesk,

};