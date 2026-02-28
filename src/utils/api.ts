// API Utility Functions for Enhanced Product API

export interface Product {
    slug?: string;
    name?: string;
    brand?: string;
    category?: string;
    model?: string;
    notes?: string;
    technology?: string;
    wattage_w?: number;
    [key: string]: string | number | boolean | null | undefined;
}

export interface APIResponse<T> {
    success: boolean;
    data: T;
    metadata?: {
        total: number;
        returned?: number;
        categories?: string[];
        brands?: string[];
        lastUpdated?: string;
        category?: string;
        filters?: Record<string, string | number | undefined>;
    };
    error?: string;
    message?: string;
}

/**
 * Fetch all products with optional client-side filtering
 */
export async function fetchProducts(filters?: {
    category?: string;
    brand?: string;
    minWattage?: number;
    maxWattage?: number;
    search?: string;
    limit?: number;
}) {
    try {
        const response = await fetch('/api/products.json');
        const result: APIResponse<Product[]> = await response.json();

        if (!result.success) {
            throw new Error(result.message || 'Failed to fetch products');
        }

        let products = result.data;

        // Apply client-side filters if provided
        if (filters) {
            if (filters.category) {
                products = products.filter(
                    (p: Product) => p.category?.toLowerCase() === filters.category?.toLowerCase()
                );
            }

            if (filters.brand) {
                products = products.filter(
                    (p: Product) => p.brand?.toLowerCase() === filters.brand?.toLowerCase()
                );
            }

            if (filters.minWattage || filters.maxWattage) {
                products = products.filter((p: Product) => {
                    if (!p.wattage_w) return false;
                    const min = filters.minWattage || 0;
                    const max = filters.maxWattage || Infinity;
                    return p.wattage_w >= min && p.wattage_w <= max;
                });
            }

            if (filters.search) {
                const searchLower = filters.search.toLowerCase();
                products = products.filter((p: Product) => {
                    return (
                        p.name?.toLowerCase().includes(searchLower) ||
                        p.brand?.toLowerCase().includes(searchLower) ||
                        p.model?.toLowerCase().includes(searchLower) ||
                        p.notes?.toLowerCase().includes(searchLower) ||
                        p.technology?.toLowerCase().includes(searchLower)
                    );
                });
            }

            if (filters.limit) {
                products = products.slice(0, filters.limit);
            }
        }

        return {
            success: true,
            data: products,
            metadata: {
                ...result.metadata,
                total: products.length,
                returned: products.length,
                filters
            }
        };
    } catch (error) {
        console.error('Error fetching products:', error);
        return {
            success: false,
            data: [],
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
}

/**
 * Fetch products by category (uses pre-filtered JSON file)
 */
export async function fetchProductsByCategory(category: string) {
    try {
        const filename = category.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-');
        const response = await fetch(`/api/${filename}.json`);
        const result: APIResponse<Product[]> = await response.json();

        if (!result.success) {
            throw new Error(result.message || 'Failed to fetch products');
        }

        return result;
    } catch (error) {
        console.error(`Error fetching ${category} products:`, error);
        return {
            success: false,
            data: [],
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
}

/**
 * Fetch a single product by slug
 */
export async function fetchProductBySlug(slug: string) {
    try {
        const response = await fetch('/api/products.json');
        const result: APIResponse<Product[]> = await response.json();

        if (!result.success) {
            throw new Error(result.message || 'Failed to fetch products');
        }

        const product = result.data.find((p: Product) => p.slug === slug);

        if (!product) {
            return {
                success: false,
                data: null,
                error: 'Product not found',
                message: `No product found with slug: ${slug}`
            };
        }

        // Find related products (same category or brand)
        const related = result.data
            .filter((p: Product) =>
                p.slug !== slug &&
                (p.category === product.category || p.brand === product.brand)
            )
            .slice(0, 6);

        return {
            success: true,
            data: product,
            related
        };
    } catch (error) {
        console.error('Error fetching product:', error);
        return {
            success: false,
            data: null,
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
}

/**
 * Fetch all packages
 */
export async function fetchPackages() {
    try {
        const response = await fetch('/api/packages.json');
        const result: APIResponse<Product[]> = await response.json();

        if (!result.success) {
            throw new Error(result.message || 'Failed to fetch packages');
        }

        return result;
    } catch (error) {
        console.error('Error fetching packages:', error);
        return {
            success: false,
            data: [],
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
}
