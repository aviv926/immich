import { AssetRepository } from 'src/repositories/asset.repository';
import { RepositoryInterface } from 'src/types';
import { Mocked, vitest } from 'vitest';

export const newAssetRepositoryMock = (): Mocked<RepositoryInterface<AssetRepository>> => {
  return {
    create: vitest.fn(),
    createAll: vitest.fn(),
    upsertExif: vitest.fn(),
    updateAllExif: vitest.fn(),
    upsertJobStatus: vitest.fn(),
    getByDayOfYear: vitest.fn(),
    getByIds: vitest.fn().mockResolvedValue([]),
    getByIdsWithAllRelationsButStacks: vitest.fn().mockResolvedValue([]),
    getByDeviceIds: vitest.fn(),
    getById: vitest.fn(),
    getByChecksum: vitest.fn(),
    getByChecksums: vitest.fn(),
    getUploadAssetIdByChecksum: vitest.fn(),
    getRandom: vitest.fn(),
    getAllByDeviceId: vitest.fn(),
    getLivePhotoCount: vitest.fn(),
    getLibraryAssetCount: vitest.fn(),
    updateAll: vitest.fn(),
    getByLibraryIdAndOriginalPath: vitest.fn(),
    deleteAll: vitest.fn(),
    update: vitest.fn(),
    remove: vitest.fn(),
    findLivePhotoMatch: vitest.fn(),
    getStatistics: vitest.fn(),
    getTimeBucket: vitest.fn(),
    getTimeBuckets: vitest.fn(),
    getAssetIdByCity: vitest.fn(),
    getAllForUserFullSync: vitest.fn(),
    getChangedDeltaSync: vitest.fn(),
    upsertFile: vitest.fn(),
    upsertFiles: vitest.fn(),
    deleteFiles: vitest.fn(),
    detectOfflineExternalAssets: vitest.fn(),
    filterNewExternalAssetPaths: vitest.fn(),
    updateByLibraryId: vitest.fn(),
    getFileSamples: vitest.fn(),
  };
};
