'use server';
/**
 * @fileOverview Provides personalized style recommendations based on user-uploaded images.
 *
 * - getPersonalizedRecommendations - A function that takes an image and returns personalized style recommendations.
 * - PersonalizedRecommendationsInput - The input type for the getPersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the getPersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  imageDataUri: z
    .string()
    .describe(
      "A photo of the user or an inspiration image, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type PersonalizedRecommendationsInput = z.infer<typeof PersonalizedRecommendationsInputSchema>;

const PersonalizedRecommendationsOutputSchema = z.object({
  recommendations: z.string().describe('Personalized nail design and beauty treatment recommendations.'),
});
export type PersonalizedRecommendationsOutput = z.infer<typeof PersonalizedRecommendationsOutputSchema>;

export async function getPersonalizedRecommendations(input: PersonalizedRecommendationsInput): Promise<PersonalizedRecommendationsOutput> {
  return personalizedStyleRecommendationsFlow(input);
}

const personalizedStyleRecommendationsPrompt = ai.definePrompt({
  name: 'personalizedStyleRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are an AI style assistant specializing in nail design and beauty treatments at Step into Smiles & Styles salon in Randburg.

  Analyze the user-provided image and provide personalized recommendations for nail designs and beauty treatments available at our salon.
  Incorporate current trends, salon specialties (like Ombre and Stiletto nails), and details from the image to tailor the suggestions.

  Consider the user's apparent style, the colors and patterns in the image, and any visible features that might influence nail design or treatment choices.

  Photo: {{media url=imageDataUri}}
  `,
});

const personalizedStyleRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedStyleRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await personalizedStyleRecommendationsPrompt(input);
    return output!;
  }
);
