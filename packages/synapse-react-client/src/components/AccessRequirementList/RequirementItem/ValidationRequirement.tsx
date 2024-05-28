import React from 'react'
import { useGetCurrentUserBundle } from '../../../synapse-queries'
import { Link, Typography } from '@mui/material'
import RequirementItem from './RequirementItem'
import { RequirementItemStatus } from '../AccessApprovalCheckMark'
import { ONE_SAGE_PRODUCTION_URL } from '../../../utils/SynapseConstants'

/**
 * When creating requests for access requirements on a particular file, one or more access requirements may require that the
 * user has a validated profile.
 *
 * This component checks if the user has a validated profile, and if not, provides a link on how to begin profile validation.
 */
export default function ValidationRequirement() {
  const { data: userBundle, isLoading } = useGetCurrentUserBundle()

  return (
    <RequirementItem
      status={
        isLoading
          ? RequirementItemStatus.LOADING
          : userBundle!.isVerified
          ? RequirementItemStatus.COMPLETE
          : RequirementItemStatus.LOCKED
      }
    >
      <Typography variant={'body1'}>
        You must first apply to have your{' '}
        <Link
          href={`${ONE_SAGE_PRODUCTION_URL}/authenticated/myaccount#trust`}
          target={'_blank'}
        >
          user profile validated
        </Link>
      </Typography>
      {isLoading && <span className="spinner" />}
      {userBundle?.isVerified && (
        <Typography variant={'body1'}>
          Your user profile is validated.
        </Typography>
      )}
    </RequirementItem>
  )
}
