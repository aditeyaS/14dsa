import React from "react";
import { PrismLanguage } from "@react-email/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface LanguageSectionsProps {
  languages: PrismLanguage[];
  sections: React.ReactNode[];
}

export function LanguageSections({
  languages,
  sections,
}: LanguageSectionsProps) {
  if (languages.length !== sections.length) {
    throw new Error("Number of languages should be equal to the section");
  }
  return (
    <Tabs defaultValue={languages[0]}>
      <TabsList>
        {languages.map((l) => (
          <TabsTrigger key={l} value={l}>
            {l}
          </TabsTrigger>
        ))}
      </TabsList>
      {sections.map((section, i) => (
        <TabsContent key={languages[i]} value={languages[i]}>
          {section}
        </TabsContent>
      ))}
    </Tabs>
  );
}
