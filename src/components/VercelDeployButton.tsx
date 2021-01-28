import React from 'react'
import { ButtonRouteLink, ButtonRouteLinkProps } from '@47ng/chakra-next'
import { FiTriangle } from 'react-icons/fi'

export interface VercelDeployButtonProps extends ButtonRouteLinkProps {}

export const VercelDeployButton: React.FC<VercelDeployButtonProps> = ({
  ...props
}) => {
  return (
    <ButtonRouteLink leftIcon={<FiTriangle />} {...props}>
      Deploy on Vercel
    </ButtonRouteLink>
  )
}
