import React from 'react'

export const Card = ({title, icon, value, background}) => {
    return (
        
            <div key={title} className={`${background} text-white font-light p-4 rounded-lg shadow flex items-center`}>
              
              <div>
              <div className="mr-4 ">
                {icon}
              </div>
              <p className="text-2xl font-bold mt-1">{value}</p>
                <h3 className="text-white mt-2">{title}</h3>
                
              </div>
            </div>
      );
}
