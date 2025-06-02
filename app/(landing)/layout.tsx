const LandingLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="mx-auto max-w-screen h-full w-full">
            {children}
        </div>
     );
}
 
export default LandingLayout;