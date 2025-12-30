"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
import { UploadCloud, Wand2, Loader2 } from 'lucide-react';
import { getPersonalizedRecommendations } from '@/ai/flows/personalized-style-recommendations';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Skeleton } from '../ui/skeleton';

export default function StyleRecommender() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setRecommendation(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGetRecommendation = async () => {
    if (!imagePreview) {
      setError("Please upload an image first.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setRecommendation(null);

    try {
      const result = await getPersonalizedRecommendations({ imageDataUri: imagePreview });
      setRecommendation(result.recommendations);
    } catch (e) {
      setError("Sorry, we couldn't generate a recommendation. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <div className="flex flex-col items-center">
        <h2 className="font-headline text-4xl md:text-5xl text-center mb-4">AI-Powered Style Advisor</h2>
        <p className="mt-2 max-w-xl text-center text-muted-foreground mb-8">
          Upload a photo of your outfit, an inspiration piece, or just a selfie to get personalized nail and beauty recommendations from our AI stylist.
        </p>

        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wand2 className="text-primary" />
              Your Personal Stylist
            </CardTitle>
            <CardDescription>Upload an image to get started.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div
              className="relative border-2 border-dashed border-muted-foreground/50 rounded-lg p-4 h-64 w-full flex items-center justify-center cursor-pointer hover:border-primary transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
              />
              {imagePreview ? (
                <Image src={imagePreview} alt="Image preview" layout="fill" objectFit="contain" className="rounded-md" />
              ) : (
                <div className="text-center text-muted-foreground">
                  <UploadCloud className="mx-auto h-12 w-12" />
                  <p>Click to upload an image</p>
                  <p className="text-xs">PNG, JPG, GIF up to 10MB</p>
                </div>
              )}
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <Button onClick={handleGetRecommendation} disabled={!imagePreview || isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing your style...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Get Recommendation
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="w-full max-w-lg mx-auto lg:mx-0 lg:mt-24">
        <Card className="h-full min-h-[400px]">
          <CardHeader>
            <CardTitle>Your AI-Generated Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading && (
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[80%]" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[90%]" />
              </div>
            )}
            {recommendation && (
              <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap font-body">
                {recommendation}
              </div>
            )}
            {!isLoading && !recommendation && (
              <p className="text-muted-foreground text-center pt-10">Your style suggestions will appear here.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
