import { StorageUtilities } from '../storage-utilities';
import { MockProduct } from './mock-interfaces';
import { StorageReturnTypes } from '../enums/storage-return-types';
import { StorageItem } from '../models/storage-item';
import { IStorageSettings } from '../interfaces/storage-settings';
import { Observable } from 'rxjs';
import { IStorageNotifier } from '../interfaces/storage-typings';

// (<any>global).isTesting = true;

export class ProductStorage extends StorageUtilities<MockProduct> {
	constructor(settings?: IStorageSettings) {
		super(settings);
	}

	getProdStorageState(): Observable<IStorageNotifier<MockProduct>> {
		return this.getStorageState();
	}
	
	getDefaultSettings() {
		return ProductStorage.defaultSettings;
	}

	getCurrentSettings(): any {
		return ProductStorage.currentSettings;
	}

	setCustomSettings(settings: IStorageSettings): void {
		ProductStorage.customSettings = settings;
	}

	resetSettingsToDefault(): void {
		ProductStorage.resetSettings();
	}

	addProduct(key: string, product: MockProduct, expiry?: number) {
		this.addItem(key, product, expiry);
	}

	getProduct(key: string): MockProduct {
		return this.getItem(key);
	}

	getProductPromise(key: string): any {
		return this.getItem(key, null, StorageReturnTypes.Promise);
	}

	getProductObservable(key: string): any {
		return this.getItem(key, null, StorageReturnTypes.Observable);
	}

	getProductUnknownType(key: string): any {
		return this.getItem(key, null, 'unknown' as any);
	}

	removeProduct(key: string) {
		this.removeItem(key);
	}

	removeProducts(keys: string[]) {
		this.removeItems(keys);
	}

	getAllStorageValues(): MockProduct[] {
		return this.getStorageValues();
	}

	getAllStorageItems(): StorageItem<MockProduct>[] {
		return this.getStorageItems();
	}

	getAllStorageKeys(): string[] {
		return this.getStorageKeys();
	}

	clear(): void {
		this.clearStorage();
	}
}
