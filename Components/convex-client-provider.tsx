'use client';

import { ReactNode } from "react";
import { ConvexReactClient, Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, SignIn, useAuth } from "@clerk/clerk-react";
import { FullscreenLoader } from "./fullscreen-loader";

const convex = new ConvexReactClient('https://quirky-crocodile-597.convex.cloud');

export function ConvexClientProvider({ children }: { children: ReactNode }) {
    return (
    <ClerkProvider publishableKey={'pk_test_dXNhYmxlLW11bGxldC05Mi5jbGVyay5hY2NvdW50cy5kZXYk'}>
        <ConvexProviderWithClerk 
        useAuth={useAuth} 
        client={convex}
        >
            <Authenticated>
                {children}
            </Authenticated>
            <Unauthenticated>
                <div className="flex flex-col items-center justify-center min-h-screen"> 
                    <SignIn />

                </div>
            </Unauthenticated>
            <AuthLoading>
                <FullscreenLoader label="Loading" />
            </AuthLoading>
            
        </ConvexProviderWithClerk>
    </ClerkProvider>
    )
};