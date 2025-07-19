import React, { useState } from 'react'
import { ShowChart, People, Campaign } from '@mui/icons-material';
import LeadGenerationDashboard from './LeadGenerationDashboard';
import CampaignDashboard from './CampaignDashboard';
import AgentDashboard from './AgentDashboard';

function DashboardList() {
    const [dashboard, setDashboard] = useState('leadgenerationdashboard')

    return (
        <div className='mt-16 bg-gray-50'>
            <div className="bg-white border-b sticky top-16 z-10">
                <div className="max-w-7xl mx-auto">
                    <nav className="flex -mb-px">
                        <span
                            className={`border-b-2 whitespace-nowrap py-4 px-5 font-medium text-sm flex items-center cursor-pointer 
            ${dashboard === 'leadgenerationdashboard'
                                    ? 'border-blue-600 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-blue-400 hover:border-blue-500'
                                }`}
                            onClick={() => setDashboard('leadgenerationdashboard')}
                        >
                            <ShowChart className="mr-2" />
                            <span>Lead Generation Dashboard</span>
                        </span>
                        <span
                            className={`border-b-2 whitespace-nowrap py-4 px-5 font-medium text-sm flex items-center cursor-pointer 
            ${dashboard === 'agentdashboard'
                                    ? 'border-blue-600 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-blue-400 hover:border-blue-500'
                                }`}
                            onClick={() => setDashboard('agentdashboard')}
                        >
                            <People className="mr-2" />
                            <span>Agent Dashboard</span>
                        </span>
                        <span
                            className={`border-b-2 whitespace-nowrap py-4 px-5 font-medium text-sm flex items-center cursor-pointer 
            ${dashboard === 'campaigndashboard'
                                    ? 'border-blue-600 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-blue-400 hover:border-blue-500'
                                }`}
                            onClick={() => setDashboard('campaigndashboard')}
                        >
                            <Campaign className="mr-2" />
                            <span>Campaign Dashboard</span>
                        </span>
                    </nav>
                </div>
            </div>
            <div className='pt-2'>
                {dashboard === 'leadgenerationdashboard' ?
                    <LeadGenerationDashboard />
                    : dashboard === 'agentdashboard' ?
                        <AgentDashboard />
                        : <CampaignDashboard />
                }
            </div>
        </div>
    )
}

export default DashboardList
