import GradientText from "@/components/gradient-text";
import { CONSTANTS } from "@/constants";
import React from "react";

const CreateGroupLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container h-screen grid grid-cols-1 lg:grid-cols-2 content-center">
      <div className="flex flex-col items-center">
        <div className="bg-gray-100 dark:bg-gray-950 dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-md dark:bg-opacity-0">
          <h3 className="text-2xl font-semibold">Classkool.</h3>
          <GradientText element="h2" className="text-4xl font-semibold py-2">
            Créer un groupe
          </GradientText>
          <p className="muted-foreground">
            Gratuit pendant les 30 premiers jours, puis 99€/mois <br />
            Annulez quand vous voulez. Sans frais cachés
          </p>
          <div className="flex flex-col gap-3 mt-16 pl-5">
            {CONSTANTS.createGroupPlaceholder.map((placeholder) => (
              <div className="flex gap-3" key={placeholder.id}>
                <placeholder.icon />
                <p>{placeholder.label}</p>
              </div>
            ))}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CreateGroupLayout;
