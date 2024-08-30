/*
  Warnings:

  - You are about to drop the column `agreement` on the `sla` table. All the data in the column will be lost.
  - Added the required column `ConfidentialityTerminationLaw` to the `SLA` table without a default value. This is not possible if the table is not empty.
  - Added the required column `EffectiveDate` to the `SLA` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ExpirationDate` to the `SLA` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PerformanceEscalationPenalties` to the `SLA` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Responsibilities` to the `SLA` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ScopeofServices` to the `SLA` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ServiceLevelObjectives` to the `SLA` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `sla` DROP COLUMN `agreement`,
    ADD COLUMN `ConfidentialityTerminationLaw` VARCHAR(6000) NOT NULL,
    ADD COLUMN `EffectiveDate` DATETIME(3) NOT NULL,
    ADD COLUMN `ExpirationDate` DATETIME(3) NOT NULL,
    ADD COLUMN `PerformanceEscalationPenalties` VARCHAR(6000) NOT NULL,
    ADD COLUMN `Responsibilities` VARCHAR(6000) NOT NULL,
    ADD COLUMN `ScopeofServices` VARCHAR(4000) NOT NULL,
    ADD COLUMN `ServiceLevelObjectives` VARCHAR(4000) NOT NULL;
