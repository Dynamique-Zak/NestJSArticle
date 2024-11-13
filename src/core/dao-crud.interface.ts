export interface IDAOCrud<T, ID> {
  
    /**
     * Récupère un élément par son identifiant unique.
     * @param id - L'identifiant de l'élément à récupérer
     * @returns Une promesse contenant l'élément ou null si non trouvé
     */
    findById(id: ID): Promise<T | null>;
  
    /**
     * Récupère tous les éléments.
     * @returns Une promesse contenant une liste de tous les éléments
     */
    findAll(): Promise<T[]>;
  
    /**
     * Supprime un élément par son identifiant.
     * @param id - L'identifiant de l'élément à supprimer
     * @returns Une promesse contenant un booléen indiquant si la suppression a réussi
     */
    delete(id: ID): Promise<boolean>;


    /**
     * Enregistre un élément, en le créant ou en le mettant à jour selon son état.
     * @param item - L'élément à enregistrer
     * @returns Une promesse contenant l'élément enregistré
     */
    save(item: T): Promise<T>;
  }