interface ComponentWithLoadingProps {
    isLoading: boolean,
    className: string,
    [key: string]: any;
}

export default function WithLoading(WrappedComponent : React.FC<any>) {

    return function ComponentWithLoading({ isLoading, className, ...props } : ComponentWithLoadingProps) {

        return (

            <>

                {isLoading && <h2 className={className}>Загрузка! Пожалуйста, подождите!</h2>}

                {!isLoading && <WrappedComponent {...props}/>}

            </>

        )
        
        

    }

}